		//[]-- é conjunto de modulos que se pode importar, está trazendos todos componentes
		
		angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatosAPI, operadorasAPI){
			$scope.app="Lista Telefônica";
			$scope.contatos = [];
			$scope.operadoras = [];

			var carregarContatos = function(){
				contatosAPI.getContatos().then(function(response){
				$scope.contatos = response.data;
				}).catch(function(data, status){
					$scope.message="Erro ao carregar contatos: " +data;	
				});
			};

			var carregarOperadoras = function(){
				operadorasAPI.getOperadoras().then(function(response){
					$scope.operadoras = response.data;
				});
			};

			//

			$scope.adicionarContato = function(contato){					
			//evitar ler parametros dentro do controller
			//*$scope.contatos.push({nome: $scope.nome, telefone: $scope.telefone});*/
			//forma correta
			//$scope.contatos.push(nome, telefone);
			// forma mais correta
			//$scope.contatos.push(contato);
			//para não alterar 
			//$scope.contatos.push(angular.copy(contato));
			//pode ser feito assim
			contato.data = new Date();
			contatosAPI.saveContato(contato).then(function(data){
				//$scope.contatos.push(contato);
				delete $scope.contato;
				$scope.contatoForm.$setPristine();
				carregarContatos();
			})
			
			};
			
			$scope.apagarContatos = function(contatos){
				$scope.contatos = contatos.filter(function(contato){
					if(!contato.selecionado){
						return contato;
					}
				});
			};

			$scope.isContatoSelecionado = function(contatos){
				return contatos.some(function(contato){
					return (contato.selecionado);
				});

			};

			$scope.ordenarPor = function(campo){
				$scope.criterioDeOrdenacao = campo;
				//console.log("Tenteui");
				$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
				//console.log(campo);
			};
			
			carregarContatos();
			carregarOperadoras();
			
		});
