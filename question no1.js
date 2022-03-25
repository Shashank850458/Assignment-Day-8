https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
--------------------
class Movie{
  constructor(title,studio,rating="PG"){
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
 static getPG(arr) {
    let pgfilms = arr.filter((movie) => movie.rating == "PG");
     return pgfilms;     
 }
  
}
let a = new Movie("Casino Royale", "Eon Productions", "PG13");
console.log(a);
let b = new Movie("KGF", "KRG Studios");
console.log(b);
let c = new Movie("RRR", "Pen Studio");
console.log(c);
let d = new Movie("Games", "Kishore Productions", "PG");
console.log(d);
let e = new Movie("Bahubali", "Arka media works", "G");
console.log(e);
console.log(Movie.getPG([a, b, c, d, e]));
