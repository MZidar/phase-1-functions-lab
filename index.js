function distanceFromHqInBlocks(block){
    if(block > 42){
        return (block-42);
    }
    else{
        return (42-block);
    }
}

function distanceFromHqInFeet(block){
    if(block > 42){
        return (block-42)*264;
    }
    else{
        return (42-block)*264;
    }
}

function distanceTravelledInFeet(block, block2){
    if(block < block2){
        return (block2-block)*264;
    }
    else{
        return (block-block2)*264;
    }
}

function calculatesFarePrice(block, block2){
    if(distanceTravelledInFeet(block, block2) < 400){
        return 0;
    }
    else if(distanceTravelledInFeet(block,block2) <= 2000){
        return (distanceTravelledInFeet(block, block2)-400)*.02;
    }
    else if(distanceTravelledInFeet(block,block2) <= 2500){
    return 25;
    }
    else if(distanceTravelledInFeet(block,block2) > 2500){
        return 'cannot travel that far';
    }
}