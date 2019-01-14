import React, { useState, useEffect } from 'react';
import { Button, Icon, Label, Header, Divider } from 'semantic-ui-react';
import styled from 'styled-components';

const StateViewer = ({ state, store, dev = true } = {}) => {
    if (!dev)
        return null;

    state = state || (store ? (store.getState ? store.getState() : (store.state ? store.state : {})) : {});
    const [stateJson, setStateJson] = useState(JSON.stringify({...state}, null, 2));
    const [viewedState, setViewedState] = useState({...state});
    const [viewerWidth, setViewerWidth] = useState(50);
    const [visible, setVisibility] = useState(false);
    const [fields, setFields] = useState([]);

    const [__LS__FONT_SIZE, __LS__INDENTATION] = [
        parseInt(localStorage.getItem('stateViewer.fontSize')),
        parseInt(localStorage.getItem('stateViewer.indentation')),
    ];
    const [FONT_SIZE, INDENTATION] = [
        !isNaN(__LS__FONT_SIZE) ? __LS__FONT_SIZE : 16,
        !isNaN(__LS__INDENTATION) ? __LS__INDENTATION : 2,
    ];
    const [fontSize, setFontSize] = useState(FONT_SIZE);
    const [indentation, setIndentation] = useState(INDENTATION);

    const changeViewedState = () => {
        let viewState = {...state};
        fields.forEach(field =>
            viewState = viewState[field]
        );
        setViewedState(viewState);
    };

    const setPrevViewedState = () => {
        if (fields.length > 0)
            return setFields(fields.slice(0, fields.length - 1));

        setViewedState(state);
        setFields([]);
    };

    const adjustStateJson = () => {
        const _stateJson = JSON.stringify(viewedState, null, indentation);
        const js = _stateJson.replace(/"\w+":/g, str => str.replace(/"/g, ''));
        setStateJson(js);
    };

    useEffect(() => localStorage.setItem('stateViewer.indentation', indentation), [indentation]);
    useEffect(() => localStorage.setItem('stateViewer.fontSize', fontSize), [fontSize]);
    useEffect(changeViewedState, [fields, state]);
    useEffect(adjustStateJson, [viewedState, indentation]);

    return (
        <div>
            <link rel='stylesheet' href='//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css' />
            <ArrowIcon
                name='angle double left'
                onClick={() => setVisibility(true)}
                style={{
                    opacity: visible ? 0 : 1,
                        visiblity: visible ? 'hidden' : '',
                        height: visible ? 0 : 'auto',
                }}
            />
            <StateViewerContainer
                indentation={indentation}
                viewerWidth={viewerWidth}
                style={{
                    opacity: visible ? 1 : 0,
                        visibility: visible ? '' : 'hidden',
                        height: visible ? 'auto' : 0,
                }}
            >
                <TimesIcon
                    name='times'
                    onClick={() => setVisibility(!visible)}
                />
                <Header as='h3' color='grey' style={{marginTop: 0}}>
                    React State Trace
                </Header>
                <Divider fitted />
                <div style={{marginBottom: 15}}>
                    {fields.length > 0 &&
                        <Label
                            as='a'
                            color='teal'
                            tag onClick={setPrevViewedState}
                        >
                            {fields[fields.length - 1]}
                        </Label>
                    }
                </div>
                <div>
                    {isObject(viewedState) &&
                    Object.keys(viewedState).map(sub_field => (
                        <StateNavigationButton
                            size='tiny'
                            key={sub_field}
                            onClick={() => setFields([...fields, sub_field])}
                            active={fields[fields.length - 1] === sub_field}
                        >
                                {sub_field}
                        </StateNavigationButton>
                    ))}
                </div>
                <WidthAdjuster>
                    <span>Adjust width</span>
                    <input
                        type='range'
                        min='40'
                        max='100'
                        step='2'
                        value={viewerWidth}
                        onChange={({ target: { value } }) =>
                            setViewerWidth(value)
                        }
                    />
                </WidthAdjuster>
                <BottomAdjusters>
                    <Adjuster>
                        <span>Adjust indentation</span>
                        <Button
                            onClick={() => setIndentation(indentation - 1)}
                            disabled={indentation === 0}
                        >
                            <AdjusterIcon name='minus'/>
                        </Button>
                        <Button
                            onClick={() => setIndentation(indentation + 1)}
                        >
                            <AdjusterIcon name='plus'/>
                        </Button>
                            <Button
                            onClick={() => setIndentation(2)}
                            disabled={indentation === 2}
                        >
                            <AdjusterIcon name='refresh'/>
                        </Button>
                    </Adjuster>
                    <Adjuster>
                        <span>Adjust font size</span>
                        <Button
                            onClick={() => setFontSize(fontSize - 1)}
                        >
                            <AdjusterIcon name='minus'/>
                        </Button>
                        <Button
                            onClick={() => setFontSize(fontSize + 1)}
                        >
                            <AdjusterIcon name='plus'/>
                        </Button>
                        <Button
                            onClick={() => setFontSize(16)}
                            disabled={fontSize === 16}
                        >
                            <AdjusterIcon name='refresh'/>
                        </Button>
                    </Adjuster>
                </BottomAdjusters>
                <StateJson fontSize={fontSize}>
                    {stateJson}
                </StateJson>
            </StateViewerContainer>
        </div>
    );
};

export default StateViewer;

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
    height: ${props => props.indentation === 0 ? 300 : 'auto'};
    -webkit-transition: opacity 0.5s;
    -moz-transition: opacity 0.5s;
    -ms-transition: opacity 0.5s;
    -o-transition: opacity 0.5s;
    transition: opacity 0.5s;
`;

const StateNavigationButton = styled(Button)`
    background: ${props => props.active ? 'green !important' : ''};
    color: ${props => props.disabled ? 'white !important' : ''};
    margin-bottom: 10px !important;
`;

const WidthAdjuster = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: flex-center;
    justify-content: space-between;
    > span {
        margin-right: 10px;
    }
    > input {
        width: 84%;
    }
`;

const BottomAdjusters = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
`;

const Adjuster = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    > button {
        padding: 6px !important;
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
