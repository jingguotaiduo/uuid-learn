#include <iostream>
#include <boost/uuid/uuid.hpp>
#include <boost/uuid/uuid_io.hpp>
#include <boost/uuid/uuid_generators.hpp>

using namespace std;
using namespace boost;

string getUUID()
{
	boost::uuids::uuid a_uuid = boost::uuids::random_generator()();
	string uuid_string = boost::uuids::to_string(a_uuid);
	return uuid_string;
}

int main()
{
	std::cout << "-----------------------C++ ʹ��boost������UUID------------------------" << std::endl;
	for (int i = 0; i < 10; i++)
		std::cout << "��"<< (i+1) <<"��UUID��" << getUUID() << std::endl;
	
	return 0;
}