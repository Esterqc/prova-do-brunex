CREATE DATABASE Heroi;

use Heroi;

create table tb_heroi(
	id_super_heroi 	int primary key auto_increment,
    nm_super_heroi 	varchar(100),
    ds_super_poder 	varchar(200),
    bt_voa 			boolean
);

select * from tb_heroi;