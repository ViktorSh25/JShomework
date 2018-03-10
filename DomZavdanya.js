/*1. Використовуючи конструкцію if..else ,напишіть код, що отримує значення prompt , а потім виводить alert 
   1, якщо значення більше нуля
   -1, якщо значення менше нуля
   0, якщо значення дорівнює нулю*/

var value = prompt('Введите число', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

// 2. За допомогою циклу for виведіть парні числа від 0 до 10

for (var i=2; i<=10; i++) {
	if (i%2 ==0) {
		alert (i);
	}
}

// 3. Перепишіть код, замінивши for на while, без зміни поведінки циклу
// 	for (var i=0; i<3; i++) {
// 		alert ("номер" + i + "!");
// 	}

var i=0
while (i<3) {
	alert ("номер" + i + "!");
	i++;
}

/*4. Перепишіть код з використанням однієї конструкції switch

var a = +prompt('a?', '');
if (a==0) {
	alert(0);
}
if (a==1) {
	alert(1);
}
if (a==2||a==3) {
	alert('2,3');
}*/

var a = +prompt('a?','');
switch (a) {
	case 0;
	alert(0);
	break;

	case 1;
	alert(1);
	break;

	case 2;
	case 3;
	alert ('2,3');
	break;
}