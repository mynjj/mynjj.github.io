import _ from 'lodash';

const descriptions = [
    'Human',
    'Programmer',
    'Lover',
    'Versatile',
    'Mexican',
    'Persistent',
    'Passionate',
    'Free',
    'Curious',
    'Earthling',
    'Thinker',
    'Existent?..',
    'Contemplative',
    'Thankful',
    'Lucky',
    'Learner',
    'Diligent',
    'Reliable',
    'Developer',
    'Creator',
    'Computer lover',
    'Responsible'
];

const randomDescription = () => _.shuffle(descriptions).join('. ');

class DescriptionDisplay {
    stringToShow: string = '';
    lIndex: number = 0;
    rIndex: number = 0
    lenToShow: number;

    constructor(lenToShow: number){
        this.lenToShow = lenToShow;
    }

    getNextString(){
        if(!this.stringToShow){
            this.stringToShow = randomDescription();
        }

        if(this.rIndex-this.lIndex < this.lenToShow){
            this.rIndex++;
        }
        else {
            if(this.rIndex>=this.stringToShow.length){
                this.stringToShow = this.stringToShow.slice(this.lIndex) +". "+ randomDescription();
                this.lIndex = 0;
                this.rIndex = this.lenToShow;
            }
            else{
                this.lIndex++;
                this.rIndex++;
            }
        }
        return this.stringToShow.slice(this.lIndex, this.rIndex);
    }
}

export default DescriptionDisplay;
