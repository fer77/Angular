import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'trunkate'
})

export class TrunkatePipe implements PipeTransform {
    transform(value: string, limit?: number) {
        if (!value)
            return null;
        
        let strLength = (limit) ? limit : 50;
        return value.substr(0, limit) + '...';
    }
}