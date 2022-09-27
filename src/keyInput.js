class KeyInput {
    constructor() {
        this.keys = {};
        window.addEventListener("keydown", this.down.bind(this));
        window.addEventListener("keyup", this.up.bind(this));
    }
    isPressed(keyCode){
        // ? = if there is
        return this.keys[keyCode] ? this.key[keyCode] : false
    }
    down(){
        if(this.keys[e.keyCode]) return;
        this.keys[e.keyCode] = true;
        console.log("keydown", e.key, e.keyCode);
    }
    up(){
        this.keys[e.keyCode] = false;
        console.log("keyup", e.key, e.keyCode);
    }
}
const keyInput = new KeyInput();

export default keyInput;