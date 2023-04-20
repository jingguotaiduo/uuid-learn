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
		 * 直接利用java.util.UUID类直接获取UUID字符串 
		*/
		for(int i=0;i<10;i++)
			System.out.println("第"+i+"个 UUID："+UUID.randomUUID().toString());
//		for(int i=35;i<62;i++)
//			System.out.println(getTwoUUIDRepeatProbability(i));
		
	}
}