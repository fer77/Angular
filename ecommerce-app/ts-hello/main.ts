import { Like } from './like.component';

let component = new Like(10, true);

component.click();
console.log(`counter: ${component.likesCount}, selected: ${component.isSelected}`);
