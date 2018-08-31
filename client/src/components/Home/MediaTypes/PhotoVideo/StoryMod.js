import React from 'react';
import DialogInput from 'react-native-dialog-input';

export default class StoryMod extends React.Component {
    constructor(props) {
        super(props) 
        this.state = { 
        isDialogVisible: true
        }
    }
    render() {
        return (
    <DialogInput isDialogVisible={true}
                title={"The Story"}
                message={"Taken in Aqaba, Jordan on March 12th, 2013"}
                hintInput ={"This was the day that..."}
                submitInput={ () => { this.props.backToScroll() } }
                closeDialog={ () => { this.props.storyOff() }}>
    </DialogInput>
        )
    }
}