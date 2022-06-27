--inserir 
insert into tb_heroi (nm_super_heroi, ds_super_poder, bt_voa)
values ('Zeno', 'Corpo robótico customizado para batalha', true);

select * from tb_heroi;

SELECT 	id_super_heroi	id,
		nm_super_heroi	nome,
		ds_super_poder	poder,
		bt_voa			voa
FROM tb_heroi;