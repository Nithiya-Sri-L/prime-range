var a =parseInt(prompt("enter a range"));

	 for(i=2;i<=a;i++)
	 	{
	 		for(j=2;j<i;j++)
	 		{
	 			if(i%j==0)
	 			{
	 				break;
	 			}
	 		}
	 		if(i==j)
			{
	 		document.write(i+"<br>")
	 	}
	}
	 
		