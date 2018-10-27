/*for(i=1; i<=10; i++)
{
console.log(i);
}*/

/*for(i=1; i<=10; i++)
{
	console.log(i*3);
}*/
/*for(i=2; i<=20; i++)
{
	console.log(i*2);
}*/


/*2 even*/
/*for(i=1; i<=50; i++)
{
	if(i%2==0)
	console.log(i);
}*/

/*3 odd*/
/*for(i=1; i<=49; i++)
{
	if(i%2==1)
	console.log(i);
}*/
/*4-- 1 5 10 15 -----100  */
/*for(i=1; i<=100; i++)
{
	if(i==1){
		
		console.log(i);

}else if

(i%5==0)
	console.log(i);
}*/

/*5.. 3 5 6 9 10 12 15 ---- 100*/

/*for(i=3; i<=100; i++)
{
	if(i%3==0 || i%5==0)
		console.log(i);
}*/

/*6* 100 95 90 85 80 75 70 ....0*/
/*for(i=100; i>=0; i--)
{
	if(i%5==0)
	console.log(i);
}*/

/*7  1 4 9 25 36 ..... 400*/

/*for(i=1; i<=20; i++)
{
	if(i!=4)
	console.log(i*i);
}*/

/*8.. 4 7 10 13 16 ---31*/

/*for(i=4; i<=31; i=i+3)
{
	console.log(i);
}*/

/*9.. 10 20 30 40 50 ---100*/

/*for(i=10; i<=100; i=i+10)
{
	console.log(i);
}*/

/* 10... 1 1 2 3 5 8 13 21 34 ----300 */

var a=1, b=1;
console.log(a);
console.log(b);
var c=a+b;

for (a=1; c<=300; c=a+b)
{
	console.log(c);
	a=b;
	b=c;
}