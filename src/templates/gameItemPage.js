import React from "react";

class GameStep extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { title, body, index } = this.props;

        return (
            <div>{index} : {title}</div>
        );
    }
}

export default props => {

    const transformPageContextItemToGameItem = (props) => {

        // setTimeout(() => {
           const { node } = props.pageContext.contentType;
           const _game = node.frontmatter;
        // }, 1000);

        return {
            gameLink: `games/${_game.path}`,
            title: _game.title,
            steps: _game.steps
        };
    }
    if (props) {

        const game = transformPageContextItemToGameItem(props);
        return (
            <div className="games-list">
                <h2>{game.title}</h2>
                {game.steps && game.steps.map((gameStep, index) => {
                    gameStep.index = index;
                    return (
                        <GameStep {...gameStep} />
                    )
                })}
            </div>
        );
    }
}
