using System;

namespace UUIDCSharp
{
    class TestUUID
    {
        static void Main(string[] args)
        {
            for(int i=0;i<10;i++)
            {
                string uuid = Convert.ToString(Guid.NewGuid());
                Console.WriteLine("第"+i.ToString()+"个 UUID is: " + uuid);
            }
        }
    }
}
