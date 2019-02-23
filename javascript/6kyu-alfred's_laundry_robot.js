/* https://www.codewars.com/kata/583d704a70407fcb43000443 */

function pathFinding(path) {
    let coords = [0, 0];

    for (let i = 0; i < path.length; i++) {
        let direction = path[i];

        switch (direction) {
            case 'n':
                coords[0]++;
                break;
            case 'e':
                coords[1]++;
                break;
            case 's':
                coords[0]--;
                break;
            case 'w':
                coords[1]--;
                break;
            default:
                return false;
        }
    }

    return (coords[0] === 2 && coords[1] === 3) ||
        (coords[0] === 3 && coords[1] === -4);
}