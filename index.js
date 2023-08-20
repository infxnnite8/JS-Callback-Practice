const inventory = newInventory();


const character = newImage('assets/green-character/static.gif')
function handleDirectionChange (direction) {
if (direction === null){
    character.src = 'assests/green-character/static.gif'
}
if (direction === 'west'){
    character.src = 'assets/green-character/west.gif'
}
if (direction === 'north'){
    character.src = 'assets/green-character/north.gif'
}
if (direction === 'east'){
    character.src = 'assets/green-character/east.gif'
}
if (direction === 'south'){
    character.src = 'assets/green-character/south.gif'
} 
move (character) .withArrowKeys (100,250, handleDirectionChange)

}

move(newImage('assets/tree.png')).withArrowKeys(200, 450)
let direction = null;
let x = 100;
let y = 250;
move (character) . to (100, 250)

function moveCharacter(){ 
    if(direction === 'west'){
        x = x - 1
    }
    if(direction === 'north'){
        y = y + 1
    }
    if(direction === 'east'){
        x = x + 1
    }
    if(direction === 'south'){
        y = y - 1
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}


function moveCharacter() {
    if (direction === 'west') {
        x = x - 1;
    }
    if (direction === 'north') {
        y = y - 1;
    }
    if (direction === 'east') {
        x = x + 1;
    }
    if (direction === 'south') {
        y = y + 1;
    }
    character.style.left = x + 'px';
    character.style.top = y + 'px';
}

setInterval(function(){ 
    if(direction === 'west'){
        x = x - 1
    }
    if(direction === 'north'){
        y = y + 1
    }
    if(direction === 'east'){
        x = x + 1
    }
    if(direction === 'south'){
        y = y - 1
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}, 1)



// Example usage
move(character).to(100, 250);
move(newImage('assets/tree.png')).to(200, 450);
move(newImage('assets/pillar.png')).to(350, 250);
move(newImage('assets/pine-tree.png')).to(450, 350);
move(newImage('assets/crate.png')).to(150, 350);
move(newImage('assets/well.png')).to(500, 575);
move(newItem('assets/sword.png')).to(500, 555);
move(newItem('assets/shield.png')).to(165, 335);
move(newItem('assets/staff.png')).to(600, 250);

setInterval(moveCharacter(), 1)
                                  

setInterval(function(){ 
    if(direction === 'west'){
        x = x - 1
    }
    if(direction === 'north'){
        y = y + 1
    }
    if(direction === 'east'){
        x = x + 1
    }
    if(direction === 'south'){
        y = y - 1
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}, 1)

setInterval(moveCharacter, 10);  // Adjust interval time as needed

document.addEventListener('keydown', function (e) {
    if (e.repeat) return;

    if (e.key === 'ArrowLeft') {
        direction = 'west';
    }
    if (e.key === 'ArrowUp') {
        direction = 'north';
    }
    if (e.key === 'ArrowRight') {
        direction = 'east';
    }
    if (e.key === 'ArrowDown') {
        direction = 'south';
    }
});

const sword = newItem('assets/sword.png');
move(sword).to(500, 555);

function newInventory() {
    let inventory = document.createElement('div');
    inventory.style.width = '100%';
    inventory.style.height = '100px';
    inventory.style.display = 'flex';
    inventory.style.flexDirection = 'row';
    inventory.style.alignItems = 'center';
    inventory.style.justifyContent = 'space-evenly';
    inventory.style.border = '2px solid black';
    inventory.style.backgroundColor = 'brown';
    document.body.append(inventory);
    return inventory;
}

