import _ from 'lodash/fp';

const nouns = [
    'Lover',
    'Human',
    'Programmer',
    'Developer',
    'Creator',
    'Computer lover',
    'Earthling',
    'Learner',
    'Thinker',
];

const adjectives = [
    'Contemplative',
    'Curious',
    'Diligent',
    'Free',
    'Friendly',
    'Lucky',
    'Mexican',
    'Passionate',
    'Persistent',
    'Reliable',
    'Responsible',
    'Thankful',
    'Versatile',
];

const taken = Math.min(nouns.length, adjectives.length);
const randomSample = _.flow(_.shuffle, _.take(taken));
const randomDescription = () => {
    const samples = _.zip(randomSample(nouns), randomSample(adjectives));
    return _.flatten(samples).join('. ');
}

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
