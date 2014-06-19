var request = require("request");

var arrPartidas = ['',
'12.06 - 1 - Brazil x Croatia - Arena de Sao Paulo, Sao Paulo ',
'13.06 - 2 - Mexico x Cameroon - Estadio das Dunas, Natal ',
'13.06 - 3 - Spain x Netherlands - Arena Fonte Nova, Salvador ',
'13.06 - 4 - Chile x Australia - Arena Pantanal, Cuiaba ',
'14.06 - 5 - Colombia x Greece - Estadio Mineirao, Belo Horizonte ',
'14.06 - 6 - Côte dIvoirx - Japan - Arena Pernambuco, Recife ',
'14.06 - 7 - Uruguay x Costa Rica - Estadio Castelao, Fortaleza ',
'14.06 - 8 - England x Italy - Arena Amazonia, Manaus ',
'15.06 - 9 - Switzerland x Ecuador - Estadio Nacional, Brasilia ',
'15.06 - 10 - France x Honduras - Estadio BeiraRio, Porto Alegre ',
'15.06 - 11 - Argentina x Bosnia - Estadio do Maracana, Rio de Janeiro ',
'16.06 - 12 - Iran x Nigeria - Arena da Baixada, Curitiba ',
'16.06 - 13 - Germany x Portugal - Arena Fonte Nova, Salvador ',
'16.06 - 14 - Ghana x USA - Estadio das Dunas, Natal ',
'17.06 - 15 - Belgium x Algeria - Estadio Mineirao, Belo Horizonte ',
'17.06 - 16 - Russia x Korea Republic - Arena Pantanal, Cuiaba ',
'17.06 - 17 - Brazil x Mexico - Estadio Castelao, Fortaleza ',
'18.06 - 18 - Cameroon x Croatia - Arena Amazonia, Manaus ',
'18.06 - 19 - Spain x Chile - Estadio do Maracana, Rio de Janeiro ',
'18.06 - 20 - Australia x Netherlands - Estadio BeiraRio, Porto Alegre ',
'19.06 - 21 - Colombia x Côte dIvoire - Estadio Nacional, Brasilia ',
'19.06 - 22 - Japan x Greece - Estadio das Dunas, Natal ',
'19.06 - 23 - Uruguay x England - Arena de Sao Paulo, Sao Paulo ',
'20.06 - 24 - Italy x Costa Rica - Arena Pernambuco, Recife ',
'20.06 - 25 - Switzerland x France - Arena Fonte Nova, Salvador ',
'20.06 - 26 - Honduras x Ecuador - Arena da Baixada, Curitiba ',
'21.06 - 27 - Argentina x Iran - Estadio Mineirao, Belo Horizonte ',
'21.06 - 28 - Nigeria x Bosnia - Arena Pantanal, Cuiaba ',
'21.06 - 29 - Germany x Ghana - Estadio Castelao, Fortaleza ',
'22.06 - 30 - USA x Portugal - Arena Amazonia, Manaus ',
'22.06 - 31 - Belgium x Russia - Estadio do Maracana, Rio de Janeiro ',
'22.06 - 32 - Korea Republix - Algeria - Estadio BeiraRio, Porto Alegre ',
'23.06 - 33 - Cameroon x Brazil - Estadio Nacional, Brasilia ',
'23.06 - 34 - Croatia x Mexico - Arena Pernambuco, Recife ',
'23.06 - 35 - Australia x Spain - Arena da Baixada, Curitiba ',
'23.06 - 36 - Netherlands x Chile - Arena de Sao Paulo, Sao Paulo ',
'24.06 - 37 - Japan x Colombia - Arena Pantanal, Cuiaba ',
'24.06 - 38 - Greece x Côte dIvoire - Estadio Castelao, Fortaleza ',
'24.06 - 39 - Italy x Uruguay - Estadio das Dunas, Natal ',
'24.06 - 40 - Costa Rica x England - Estadio Mineirao, Belo Horizonte ',
'25.06 - 41 - Honduras x Switzerland - Arena Amazonia, Manaus ',
'25.06 - 42 - Ecuador x France - Estadio do Maracana, Rio de Janeiro ',
'25.06 - 43 - Nigeria x Argentina - Estadio BeiraRio, Porto Alegre ',
'25.06 - 44 - Bosnia x Iran - Arena Fonte Nova, Salvador ',
'26.06 - 45 - USA x Germany - Arena Pernambuco, Recife ',
'26.06 - 46 - Portugal x Ghana - Estadio Nacional, Brasilia ',
'26.06 - 47 - Korea Republix - Belgium - Arena de Sao Paulo, Sao Paulo ',
'26.06 - 48 - Algeria x Russia - Arena da Baixada, Curitiba',
'28.06 - 49 - 1A x 2B - Belo Horizonte ',
'28.06 - 50 - 1C x 2D - Rio de Janeiro ',
'29.06 - 51 - 1B x 2A - Fortaleza ',
'29.06 - 52 - 1D x 2C - Recife ',
'30.06 - 53 - 1E x 2F - Brasília ',
'30.06 - 54 - 1G x 2H - Porto Alegre ',
'01.07 - 55 - 1F x 2E - São Paulo ',
'01.07 - 56 - 1H x 2G - Salvador ',
'04.07 - 57 - V49 x V50 - Fortaleza ',
'04.07 - 58 - V53 x V54 - Rio de Janeiro ',
'05.07 - 59 - V51 x V52 - Salvador ',
'05.07 - 60 - V55 x V56 - Brasília ',
'08.07 - 61 - V57 x V58 - Belo Horizonte ',
'09.07 - 62 - V59 x V60 - São Paulo ',
'12.07 - 63 - P61 x P62 - Brasília ',
'13.07 - 64 - V61 x V62 - Rio de Janeiro '];

function loop() {


	request({
		uri: "https://fwctickets.fifa.com/TopsAkaCalls/Calls.aspx/getRefreshChartAvaDem?l=pt&c=BRA",
		method: "GET",
		headers: {
		    'User-Agent': ':Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36'
		},
		json: true
	}, function(error, response, body) {
		
	
		var data = eval('(' + body.d.data + ')');

		var eventos = data.BasicCodes.PRODUCTPRICES;
		console.log('\033[2J');
		for (var i = 0; i < eventos.length; i++) {
			if (eval(eventos[i].Quantity) >= 1)
			{
				var partidaId = eval(eventos[i].PRPProductId.replace('IMT', ''));
				var categoriaId = eventos[i].PRPCategoryId;
				var quantidade = eventos[i].Quantity;

				if (partidaId == 39)
				{
					console.log("	");
				}

				console.log('Qtd:' + quantidade + '		' + arrPartidas[partidaId] + '		Categoria: ' + categoriaId);

				if (partidaId == 39)
				{
					console.log("	");
				}
			}
		};
	});

}

setInterval(function(){loop();},1000)





