import ClassRoom from "./0-classroom";

function initializeRooms() {
    const object1 = new ClassRoom(19);
    const object2 = new ClassRoom(20);
    const object3 = new ClassRoom(24);
    const list = [object1, object2, object3];
    
    return(list);
}

export default initializeRooms;
