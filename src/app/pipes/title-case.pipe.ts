import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if(!value) return  
    let words=value.split(' ');
    for(var i=0 ;i< words.length;i++){
      if(i>0 && this.isPreposition(words[i]) ){
        words[i]=words[i].toLocaleLowerCase();
      }else{
        words[i]= this.titleCase(words[i])
      }
    }
    return words.join(' ')
  }
  private titleCase(word:string) :string{
    return  word.substring(0,1).toUpperCase()+word.substring(1).toLowerCase()
  }
  private isPreposition(word:string):boolean{
    let prepositions=["of", "for","the"]
    return prepositions.includes(word.toLocaleLowerCase())
  }

}
