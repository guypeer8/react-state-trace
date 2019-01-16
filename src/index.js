import React from 'react';
import { Button, Icon, Label, Header, Divider } from 'semantic-ui-react';
import styled from 'styled-components';

export default class StateViewer extends React.PureComponent {
    constructor(props) {
        super(props);
        const appState = this.getAppState(props);
        const fontSize = this.FONT_SIZE;
        const indentation = this.INDENTATION;
        const showAdjusters = this.SHOW_ADJUSTERS;

        this.state = {
            appState,
            stateJson: JSON.stringify({...appState}, null, indentation),
            viewedState: {...appState},
            viewerWidth: 50,
            visible: false,
            fields: [],
            fontSize,
            indentation,
            showAdjusters,
        };

        this.changeViewedState = this.changeViewedState.bind(this);
        this.setPrevViewedState = this.setPrevViewedState.bind(this);
        this.changeStateJson = this.changeStateJson.bind(this);
    }

    getAppState({ store, state } = {}) {
        if (state)
            return state;

        if (store) {
            if (store.getState && (typeof store.getState === 'function'))
                return store.getState();
            if (store.state)
                return store.state;
        }

        return {};
    };

    get FONT_SIZE() {
        const __LS__FONT_SIZE = parseInt(localStorage.getItem('stateViewer.fontSize'));
        return !isNaN(__LS__FONT_SIZE) ? __LS__FONT_SIZE : 16;
    };

    get INDENTATION() {
        const __LS__INDENTATION = parseInt(localStorage.getItem('stateViewer.indentation'));
        return !isNaN(__LS__INDENTATION) ? __LS__INDENTATION : 2;
    };

    get SHOW_ADJUSTERS() {
        const __LS__SHOW_ADJUSTERS = localStorage.getItem('stateViewer.showAdjusters');
        return __LS__SHOW_ADJUSTERS !== 'false';
    };

    changeViewedState() {
        let viewedState = {...this.state.appState};
        this.state.fields.forEach(field =>
            viewedState = viewedState[field]
        );
        this.setState({ viewedState });
    };

    setPrevViewedState() {
        const { fields, appState } = this.state;
        if (fields.length > 0) {
            return this.setState({
                fields: fields.slice(0, fields.length - 1),
            });
        }

        this.setState({
            viewedState: {...appState},
            fields: [],
        });
    };

    changeStateJson() {
        const { viewedState, indentation } = this.state;
        const _stateJson = JSON.stringify(viewedState, null, indentation);
        const js = _stateJson.replace(/"\w+":/g, str => str.replace(/"/g, ''));
        this.setState({ stateJson: js });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps)
            this.setState({ appState: this.getAppState(this.props) });

        if (this.state.appState !== prevState.appState)
            this.changeViewedState();

        if (this.state.indentation !== prevState.indentation) {
            localStorage.setItem('stateViewer.indentation', this.state.indentation);
            this.changeViewedState();
        }

        if (this.state.fontSize !== prevState.fontSize)
            localStorage.setItem('stateViewer.fontSize', this.state.fontSize);

        if (this.state.fields !== prevState.fields)
            this.changeViewedState();

        if (this.state.viewedState !== prevState.viewedState)
            this.changeStateJson();

        if (this.state.showAdjusters !== prevState.showAdjusters)
            localStorage.setItem('stateViewer.showAdjusters', this.state.showAdjusters);
    };

    render() {
        if (this.props.dev === false)
            return null;

        const { visible, indentation, fontSize, viewerWidth, fields, stateJson, showAdjusters } = this.state;
        return (
            <div>
                <link rel='stylesheet' href='//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css'/>
                <ArrowIcon
                    name='angle double left'
                    onClick={() => this.setState({visible: true})}
                    visible={visible}
                />
                <StateViewerContainer
                    indentation={indentation}
                    viewerWidth={viewerWidth}
                    visible={visible}
                >
                    <TimesIcon
                        name='times'
                        onClick={() => this.setState({visible: !visible})}
                    />
                    <Title
                        as='h3'
                        color='grey'
                        showAdjusters={showAdjusters}
                    >
                        <span>React State Trace</span>
                        <DownArrowIcon
                            name='angle double down'
                            onClick={() => this.setState({showAdjusters: true})}
                        />
                    </Title>
                    <Divider fitted/>
                    <Adjusters showAdjusters={showAdjusters}>
                        <UpArrowIcon
                            name='angle double up'
                            onClick={() => this.setState({showAdjusters: false})}
                        />
                        <Adjuster>
                            <span>Adjust width</span>
                            <input
                                type='range'
                                min='40'
                                max='100'
                                step='2'
                                value={viewerWidth}
                                onChange={({target: {value}}) =>
                                    this.setState({viewerWidth: value})
                                }
                            />
                        </Adjuster>
                        <Divider/>
                        <Adjuster>
                            <span>Adjust indentation</span>
                            <div>
                                <Button
                                    onClick={() => this.setState({indentation: indentation - 1})}
                                    disabled={indentation === 0}
                                >
                                    <AdjusterIcon name='minus'/>
                                </Button>
                                <Button
                                    onClick={() => this.setState({indentation: indentation + 1})}
                                >
                                    <AdjusterIcon name='plus'/>
                                </Button>
                                <Button
                                    onClick={() => this.setState({indentation: 2})}
                                    disabled={indentation === 2}
                                >
                                    <AdjusterIcon name='refresh'/>
                                </Button>
                            </div>
                        </Adjuster>
                        <Divider/>
                        <Adjuster>
                            <span>Adjust font size</span>
                            <div>
                                <Button
                                    onClick={() => this.setState({fontSize: fontSize - 1})}
                                >
                                    <AdjusterIcon name='minus'/>
                                </Button>
                                <Button
                                    onClick={() => this.setState({fontSize: fontSize + 1})}
                                >
                                    <AdjusterIcon name='plus'/>
                                </Button>
                                <Button
                                    onClick={() => this.setState({fontSize: 16})}
                                    disabled={fontSize === 16}
                                >
                                    <AdjusterIcon name='refresh'/>
                                </Button>
                            </div>
                        </Adjuster>
                    </Adjusters>
                    <div style={{marginBottom: 15}}>
                        {fields.length > 0 &&
                        <Label
                            as='a' color='teal' tag
                            onClick={this.setPrevViewedState}
                        >
                            {fields[fields.length - 1]}
                        </Label>
                        }
                    </div>
                    <div>
                        {isObject(this.state.viewedState) &&
                        Object.keys(this.state.viewedState).map(sub_field => (
                            <StateNavigationButton
                                size='tiny'
                                key={sub_field}
                                onClick={() => this.setState({fields: [...fields, sub_field]})}
                                active={fields[fields.length - 1] === sub_field}
                            >
                                {sub_field}
                            </StateNavigationButton>
                        ))}
                    </div>
                    <StateJson fontSize={fontSize}>
                        {stateJson}
                    </StateJson>
                </StateViewerContainer>
            </div>
        );
    }
}

const ArrowIcon = styled(Icon)`
    position: absolute;
    top: 8px;
    right: 2px;
    height: 20px !important;
    width: 25px;
    cursor: pointer;
    color: black;
    background: white;
    border: 1px solid black;
    z-index: 2000;
    font-size: 18px;
    opacity: ${props => props.visible ? 0 : 1};
    visiblity: ${props => props.visible ? 'hidden' : ''};
    height: ${props => props.visible ? 0 : 'auto'};
    -webkit-transition: opacity 0.5s;
    -moz-transition: opacity 0.5s;
    -ms-transition: opacity 0.5s;
    -o-transition: opacity 0.5s;
    transition: opacity 0.5s;
`;

const TimesIcon = styled(Icon)`
    position: absolute;
    top: 10px;
    right: -5px;
    cursor: pointer;
    font-size: 18px;
`;

const UpArrowIcon = styled(Icon)`
    position: absolute;
    top: 2px;
    right: 2px;
    cursor: pointer;
    &:hover {
        opacity: 0.88;
    }
`;
const DownArrowIcon = styled(Icon)`
    cursor: pointer;
    font-size: 18px;
    -webkit-transition: opacity 0.3s;
    -moz-transition: opacity 0.3s;
    -ms-transition: opacity 0.3s;
    -o-transition: opacity 0.3s;
    transition: opacity 0.3s;
`;

const Title = styled(Header)`
    margin-top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > i.icon {
        opacity: ${props => props.showAdjusters ? 0 : 1};
        &:hover {
            opacity: ${props => props.showAdjusters ? 0 : 0.88};
        }
    }
`;

const StateViewerContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: ${props => props.viewerWidth + '%'};
    background: black;
    color: white;
    overflow: scroll;
    padding: 30px;
    z-index: 2000;
    height: ${props => props.indentation === 0 ? '300px' : 'auto'};
    opacity: ${props => props.visible ? 1 : 0};
    visibility: ${props => props.visible ? '' : 'hidden'};
    height: ${props => props.visible ? (props.indentation === 0 ? '300px' : 'auto') : 0};
    -webkit-transition: opacity 0.5s;
    -moz-transition: opacity 0.5s;
    -ms-transition: opacity 0.5s;
    -o-transition: opacity 0.5s;
    transition: opacity 0.5s;
    max-height: 100%;
`;

const StateNavigationButton = styled(Button)`
    background: ${props => props.active ? '#00b5ad !important' : ''};
    color: ${props => props.disabled ? 'white !important' : ''};
    margin-bottom: 10px !important;
`;

const Adjusters = styled.div`
    border: 1px solid #333232;
    border-radius: 10px;
    margin-top: 10px;
    position: relative;
    -webkit-transition: opacity 0.3s;
    -moz-transition: opacity 0.3s;
    -ms-transition: opacity 0.3s;
    -o-transition: opacity 0.3s;
    transition: opacity 0.3s;
    opacity: ${props => props.showAdjusters ? 1 : 0};
    height: ${props => props.showAdjusters ? 'auto' : 0};
    z-index: ${props => props.showAdjusters ? 1 : -10};
    padding: ${props => props.showAdjusters ? '25px 10px 10px 10px' : 0};
    margin-bottom: ${props => props.showAdjusters ? '10px' : 0};
`;

const Adjuster = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
   > input[type="range"] {
        width: 68%;
    }
    > div > button {
        padding: 3px !important;
    }
    > span {
        margin-right: 10px;
    }
`;

const AdjusterIcon = styled(Icon)`
    margin: 0 !important;
`;

const StateJson = styled.pre`
    border: 1px solid #000;
    margin-top: 40px;
    font-size: ${props => props.fontSize + 'px'};
`;

function isObject(param) {
    if (
        !param
        || typeof param === 'number'
        || typeof param === 'string'
        || Array.isArray(param)
        || !param.constructor
    ) return false;

    return param.constructor.name === 'Object';
}
