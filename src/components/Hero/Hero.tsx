import { Container, Wrapper, TextContent } from './styles';

// assets
import CafeFresquinhoIcon from '../../assets/icons/cafe-fresquinho.svg';
import CompraSeguraIcon from '../../assets/icons/compra-segura.svg';
import EmbalagemIcon from '../../assets/icons/embalagem.svg';
import EntregaRapidaIcon from '../../assets/icons/entrega-rapida.svg';
import EmbalagemDeCafe from '../../assets/images/hero.svg';

export function Hero() {
	return (
		<Container>
			<Wrapper>
				<TextContent>
					<h1>Encuentra el café perfecto para cualquier momento del día</h1>
					<h2>
						Con Coffee Delivery obtienes tu café donde quiera que estés, en
						cualquier momento
					</h2>
					<div className="flex-hor">
						<ul>
							<li>
								<img
									src={CompraSeguraIcon}
									alt="ícone Compra simples e segura"
								/>
								Compra sencilla y segura
							</li>
							<li>
								<img
									src={EntregaRapidaIcon}
									alt="ícone Entrega rápida e rastreada"
								/>
								Entrega rápida y con seguimiento
							</li>
						</ul>
						<ul>
							<li>
								<img
									src={EmbalagemIcon}
									alt="ícone Embalagem mantém o café intacto"
								/>
								El empaque mantiene el café intacto
							</li>
							<li>
								<img
									src={CafeFresquinhoIcon}
									alt="ícone O café chega fresquinho até você"
								/>
								El café te llega fresco
							</li>
						</ul>
					</div>
				</TextContent>
				<img
					className="img-hero"
					src={EmbalagemDeCafe}
					alt="Imagem de uma embalagem de café"
				/>
			</Wrapper>
		</Container>
	);
}
