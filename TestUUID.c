#include <stdio.h>
#include <stdlib.h>

char* gen_uuid() //3fb17ebc-bc38-4939-bc8b-74f2443281d4
{
	char v[] = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' };
	static char buf[37] = { 0 };
	for (int i = 0; i < 37; ++i)
	{
		if (i == 8 || i == 13 || i == 18 || i == 23)
			buf[i] = '-'; //put dashes in place 8 dash 4 dash 4 dash 4 dash 12
		else if(i != 36)
			buf[i] = v[rand() % 16]; //gen random for all spaces because lazy
		else
			buf[36] = '\0'; //needs end byte
	}
	return buf;
}

void printChars(char *s)
{
	for (int i = 0; i <= 36; ++i)
	{
		if(i !=36)
			printf("%c", *(s++));
		else
			printf("\n");
	}
}

int main()
{
	puts("----------------C语言代码生成UUID-----------------");
	for (int i = 0; i < 10; i++)
	{
		char *s = gen_uuid();
		printf("第%d个UUID：", i + 1);
		printChars(s);
	}
	
	system("pause");
	return 0;
}