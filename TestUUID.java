package com;
import java.util.UUID;

public class TestUUID {
	
	public static String getTwoUUIDRepeatProbability(int i)
	{
		String res = null;
		double x = Math.pow(2, 122);
        double n = Math.pow(2, i);
        double p = 1 - Math.exp(-(n * n) / 2 / x);
        res = ("2^" + i + "=" + (1L << i) + " probability: 0" + String.valueOf(1 + p).substring(1));
		return res;
	}
	
	public static void main(String[] args)
	{
		/*
		 * ֱ������java.util.UUID��ֱ�ӻ�ȡUUID�ַ��� 
		*/
		for(int i=0;i<10;i++)
			System.out.println("��"+i+"�� UUID��"+UUID.randomUUID().toString());
//		for(int i=35;i<62;i++)
//			System.out.println(getTwoUUIDRepeatProbability(i));
		
	}
}