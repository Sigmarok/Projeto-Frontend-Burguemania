import { Injectable } from '@angular/core';

export interface BurguerItem {
  name: string;
  ingredients: string;
  description: string;
  price: number;
}

export interface Category {
  title: string;
  items: BurguerItem[];
}

@Injectable({
  providedIn: 'root'
})
export class BurguersService {

  constructor() { }

  burguers: { [key: string]: Category }  = {
    vegan:{
      title: 'Herbivoro e saboroso',
      items: [
        { name: 'Green Delight',
          ingredients: 'Pão integral, hambúrguer de grão-de-bico, alface, tomate, picles, pasta de abacate e molho tahine.',
          description: 'uma  escolha deliciosa para quem ama frescor e leveza. O hambúrguer de grão-de-bico é temperado de forma sutil, trazendo uma textura macia e um sabor delicado. A pasta de abacate adiciona cremosidade, enquanto o molho tahine oferece um toque levemente cítrico. Os vegetais frescos equilibram o prato, proporcionando crocância e suculência em cada mordida.',
          price: 35.0},
        { name: 'Curry Veggie Smash',
          ingredients: 'Pão de batata, hambúrguer de lentilha com curry, cebola caramelizada, rúcula, tomate seco e molho de manga com gengibre.',
          description: 'Uma explosão de sabores exóticos, com o hambúrguer de lentilha absorvendo a intensidade do curry e do gengibre. A cebola caramelizada traz um toque adocicado, enquanto o molho de manga equilibra com frescor e leve acidez. Este hambúrguer é uma verdadeira jornada culinária que combina texturas e aromas únicos.',
          price: 40.0},
        { name: 'Fumaça Verde',
          ingredients: 'Pão sem glúten, hambúrguer de feijão preto defumado, couve crispy, queijo vegano, cebola marinada e molho barbecue.',
          description: 'Com sabor profundo e marcante, este hambúrguer é um deleite para os amantes de pratos defumados. O feijão preto é robusto e bem temperado, enquanto a couve crispy adiciona uma textura surpreendente. O molho barbecue vegano realça ainda mais o sabor com seu equilíbrio entre doce e picante.',
          price: 45.0}
      ]
    },

    fitness:{
      title: 'Fitness e saudáveis',
      items: [
        { name: 'Fit Chicken Smash',
          ingredients: 'Pão integral, hambúrguer de frango, alface, tomate e cream cheese light.',
          description: 'Uma refeição nutritiva e saborosa, o hambúrguer de frango é grelhado e temperado com ervas, resultando em uma carne suculenta e leve. O cream cheese light adiciona um toque cremoso sem comprometer a leveza do prato. Perfeito para quem busca energia e sabor sem abrir mão de uma dieta saudável.',
          price: 35.0},
        { name: 'Power Green',
          ingredients: 'Pão de espinafre, hambúrguer de frango e brócolis, abacaxi grelhado, queijo cottage e mostarda dijon.',
          description: 'Este hambúrguer combina saúde e sofisticação. O hambúrguer é rico em proteínas e fibras, enquanto o abacaxi grelhado traz um sabor tropical que complementa o queijo cottage. A mostarda dijon finaliza com um toque picante, tornando-o uma escolha deliciosa e equilibrada.',
          price: 40.0},
        { name: 'Low-Carb Smash',
          ingredients: 'Hambúrguer de carne magra, alface, tomate, cebola e molho de iogurte com ervas.',
          description: 'Uma opção leve e saudável, com o hambúrguer de carne magra grelhada garantindo sabor e suculência. As folhas de alface frescas substituem o pão, tornando-o ideal para dietas low-carb. O molho de iogurte com ervas confere um toque refrescante, elevando a experiência gastronômica.',
          price: 45.0}
      ]
    },

    infarto:{
      title: 'Felicidade em forma de hambúrguer',
      items:[
        { name: 'Mega Bacon Blast',
          ingredients: 'Pão brioche, hambúrguer duplo, cheddar, cebola crispy, bacon e molho barbecue.',
          description: 'Um hambúrguer indulgente que combina camadas generosas de carne suculenta com bacon crocante e queijo cheddar derretido. A cebola crispy oferece crocância, enquanto o molho barbecue traz um toque defumado e agridoce. Uma explosão de sabores para os amantes de hambúrgueres robustos.',
          price: 35.0,
        },
        { name: 'Triple Cheese Heaven',
          ingredients: 'Pão brioche, hambúrguer, cheddar, muçarela, gorgonzola e maionese trufada.',
          description: 'Para os apaixonados por queijo, este hambúrguer é um sonho. Com três tipos de queijo cuidadosamente combinados, cada mordida traz cremosidade e intensidade de sabor. A carne suculenta é envolvida pela maionese trufada, criando uma experiência rica e irresistível.',
          price: 40.0,
        },
        { name: 'BBQ Monster Smash',
          ingredients: 'Pão australiano, hambúrguer de costela suína, coleslaw, cheddar e bacon.',
          description: 'Inspirado no churrasco americano, este hambúrguer é uma celebração de sabores. O hambúrguer de costela desfiada é macio e bem temperado, enquanto o coleslaw traz frescor e crocância. O cheddar derretido e o bacon crocante adicionam camadas extras de sabor, resultando em uma experiência única e marcante.',
          price: 45.0,
        }
      ]
    }
  };

  getBurgerByName(name: string): BurguerItem | undefined {
    for (const category of Object.values(this.burguers)) {
      const item = category.items.find(burger => burger.name === name);
      if (item) {
        return item;
      }
    }
    return undefined;
  }
}
