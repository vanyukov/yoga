import React from 'react';

import withStore from "~/hocs/withStore";
import HeaderTraining from '~/containers/Training/Header'
import DescriptionTraining from "~/containers/Training/Description";
import Final from "~/containers/Training/Final";
import HeaderInfo from "~/containers/Training/HeaderInfo";

class Training extends React.Component {

    constructor(props) {
        super(props);

        const haveExercises = this.props.stores.selected.items.length;
        this.state = {
            expercise: haveExercises ?
                this.props.stores.selected.items[0] :
                null
            , currentLineId: haveExercises ?
                0 :
                null
            , interval: null
            , currentRepeat: 0
            , currentTime: 0
            , isPause: false
            , isFinished: false
        };
    }

    componentDidMount() {
        this.startExercises()
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
        this.setState({
            interval: null
        })
    }

    startExercises() {
        this.setState({
            interval: setInterval(this.doExercises.bind(this), 1000)
            , isPause: false
        })
    }

    pauseBtn() {
        if (this.state.isPause) {
            this.startExercises();
        } else {
            clearInterval(this.state.interval);
            this.setState({
                isPause: true
                , interval: null
            })
        }
    }

    doExercises() {

        //first start
        if (this.state.expercise == null) {
            this.switchExercises(0);
            return;
        }
        ;

        let newTime = this.state.currentTime + 1;
        let newRepeat = this.state.currentRepeat;

        if (newTime >= this.state.expercise.sec) {
            newRepeat++;
            newTime = 0;
        }
        ;

        if (newRepeat >= this.state.expercise.kol) {
            this.switchExercises(this.state.currentLineId + 1);
            return;
        }
        ;

        this.setState({
            currentTime: newTime
            , currentRepeat: newRepeat
        });

    }

    switchExercises(number) {

        if (this.state.isFinished) {
            return;

        } else if (number < 0) {
            number = 0;

        } else if (number >= this.props.stores.selected.items.length) {
            this.finishExercises();
            return;
        }
        ;

        this.setState({
            expercise: this.props.stores.selected.items[number]
            , currentLineId: number
            , currentRepeat: 0
            , currentTime: 0
        })
    }

    nextExercises() {
        this.switchExercises(this.state.currentLineId + 1);
    }

    prevExercises() {
        this.switchExercises(this.state.currentLineId - 1);
    }

    finishExercises() {
        clearInterval(this.state.interval);
        this.setState({
            isFinished: true
            , interval: null
        })
    }

    render() {

        return (
            <>
                <HeaderTraining
                    pauseBtn={this.pauseBtn.bind(this)}
                    prevExercises={this.prevExercises.bind(this)}
                    nextExercises={this.nextExercises.bind(this)}
                    count={(this.state.currentLineId + 1) + " из " + this.props.stores.selected.items.length}
                    disabledExersiseOperation={this.state.isFinished}
                    isMobile = { this.props.stores.device.isMobile }
                >
                    {this.state.expercise != null && !this.state.isFinished ?
                        <HeaderInfo
                            expercise={this.state.expercise}
                            currentRepeat={this.state.currentRepeat}
                            currentTime={this.state.currentTime}
                        />
                        : ''
                    }
                </HeaderTraining>
                <div className="container">
                    {this.state.isPause ?
                        <div className="alert alert-primary text-center" role="alert">
                            Пауза
                        </div> :
                        ''
                    }
                    {this.state.isFinished ?
                        <Final/> :
                        <DescriptionTraining expercise={this.state.expercise}/>
                    }

                </div>
            </>
        );
    }
}

export default withStore(Training);