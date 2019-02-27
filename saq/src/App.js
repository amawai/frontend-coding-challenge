import React, { Component } from 'react';
import SearchParams from './components/SearchParams';
import { BottleCard } from './components/BottleCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchParams
          cards={{...mockData}}/>
        
      </div>
    );
  }
}

export default App;


const mockData = 
{
  "title": "Brasserie Voirons Lug Bière Forte Rousse",
  "uri": "https://www.saq.com/page/fr/saqcom/biere-ale/brasserie-voirons-lug-biere-forte-rousse/13504777",
  "printableUri": "http://www.saq.com/items/Brasserie Voirons Lug Bière Forte Rousse",
  "clickUri": "https://www.saq.com/page/fr/saqcom/biere-ale/brasserie-voirons-lug-biere-forte-rousse/13504777",
  "uniqueId": "-1$0$30292.23337$https://www.saq.com/page/fr/saqcom/biere-ale/brasserie-voirons-lug-biere-forte-rousse/13504777",
  "excerpt": "Fiche descriptive Brasserie Voirons Lug Bière Forte Rousse Bière rousse de type Ale, 750 ml Code SAQ : 13504777 Code CUP : 03683080354156 ... Infos détaillées ... couleur Roux, rousse Format",
  "firstSentences": null,
  "summary": null,
  "flags": "HasHtmlVersion",
  "hasHtmlVersion": true,
  "hasMobileHtmlVersion": false,
  "score": 8145,
  "percentScore": 90.7318,
  "rankingInfo": null,
  "rating": 3,
  "isTopResult": false,
  "isRecommendation": false,
  "titleHighlights": [
  {
  "length": 5,
  "offset": 22
  },
  {
  "length": 6,
  "offset": 34
  }
  ],
  "firstSentencesHighlights": [],
  "excerptHighlights": [
  {
  "length": 5,
  "offset": 40
  },
  {
  "length": 6,
  "offset": 52
  },
  {
  "length": 5,
  "offset": 59
  },
  {
  "length": 6,
  "offset": 65
  },
  {
  "length": 6,
  "offset": 177
  }
  ],
  "printableUriHighlights": [
  {
  "length": 5,
  "offset": 47
  },
  {
  "length": 6,
  "offset": 59
  }
  ],
  "summaryHighlights": [],
  "parentResult": null,
  "childResults": [],
  "totalNumberOfChildResults": 0,
  "absentTerms": [],
  "raw": {
  "systitle": "Brasserie Voirons Lug Bière Forte Rousse",
  "systopparent": "212416877431256528",
  "sysurihash": "1LHP+bXkhF7rPLW9",
  "urihash": "1LHP+bXkhF7rPLW9",
  "tpdisponibiliteraw": "<img class=\"disponone\" src=\"/content/dam/saq/images-site/recherche/dispo-non.png\">;<img src=\"/content/dam/saq/images-site/bt/disponibilite-qte_fr.gif\" alt=\"Voir les quantités en succursale\" border=\"0\" id=\"disponibilite-13504777\" title=\"Voir les quantités en succursale\" onmouseover=\"MM_swapImage('disponibilite-13504777','','/content/dam/saq/images-site/bt/disponibilite-qte-o_fr.gif',1)\" onmouseout=\"MM_swapImgRestore()\">",
  "tpbouchon": "Couronne métallique",
  "tpcodecup": "03683080354156",
  "sysuri": "http://www.saq.com/items/Brasserie Voirons Lug Bière Forte Rousse",
  "sysprintableuri": "http://www.saq.com/items/Brasserie Voirons Lug Bière Forte Rousse",
  "sysfolders": "00001https://http:/0cc8ba12\n00002https://http:/www.saq.com/5a2fe8a7\n00003https://http:/www.saq.com/items/cef30134",
  "tpproducteur": "La Brasserie des Voirons",
  "tpcategorieraw": "Bière rousse de type Ale, 750 ml",
  "tpcategorie": "Bière rousse de type Ale",
  "tpquantitelimite": "true",
  "sysindexeddate": 1551173642000,
  "syslanguage": "French",
  "tpinventairenomsuccursalesplitgroup": "Dorval 23029;Kirkland - St-Charles/Hymus 23177;Mont-Tremblant - Saint-Jovite 23119;Centre Le Boulevard 23344;Exclusivement pour les restaurateurs 23385;L'Île-des-Soeurs 23337;Québec - Boul. Laurier 33575;Rivière-du-Loup 33548;Saint-Jean-sur-Richelieu - Boul. du Séminaire 23162",
  "tpprixbande": "10$ - 15$",
  "tpcoveoconnectorhasbinarydata": "false",
  "tppays": "France",
  "tpdisponibilite": "En Succursale",
  "tpinventairetypesuccursalesplitgroup": "SAQ Sélection;SAQ Sélection;SAQ Sélection;SAQ Sélection;SAQ Restauration;SAQ Sélection;SAQ Sélection;SAQ Sélection;SAQ Sélection",
  "tpcouleur": "Roux, rousse",
  "syssite": "www.saq.com",
  "tppagetitle": "Brasserie Voirons Lug Bière Forte Rousse",
  "tpthumbnailuri": "http://s7d9.scene7.com/is/image/SAQ/13504777_is",
  "tpprixnum": 13.2,
  "sysdocumenttype": "WebPage",
  "tpprixnormal": "13,20 $",
  "syssource": "SAQ",
  "syssize": 134022,
  "sysdate": -17955907200000,
  "tpnomdebouteille": "Brasserie Voirons Lug Bière Forte Rousse",
"tpformat": "750 ml",
"systopparentid": 212416877431256500,
"tpcodesaq": "13504777",
"syssourcetype": "WebScraper",
"sysclickableuri": "https://www.saq.com/page/fr/saqcom/biere-ale/brasserie-voirons-lug-biere-forte-rousse/13504777",
"sysfiletype": "webscraperwebpage",
"tpcontenant": "Contenant de verre coloré",
"tpproductid": "13504777",
"sysrowid": 2300633,
"syscollection": "Default"
},
"Title": "Brasserie Voirons Lug Bière Forte Rousse",
"Uri": "https://www.saq.com/page/fr/saqcom/biere-ale/brasserie-voirons-lug-biere-forte-rousse/13504777",
"PrintableUri": "http://www.saq.com/items/Brasserie Voirons Lug Bière Forte Rousse",
"ClickUri": "https://www.saq.com/page/fr/saqcom/biere-ale/brasserie-voirons-lug-biere-forte-rousse/13504777",
"UniqueId": "-1$0$30292.23337$https://www.saq.com/page/fr/saqcom/biere-ale/brasserie-voirons-lug-biere-forte-rousse/13504777",
"Excerpt": "Fiche descriptive Brasserie Voirons Lug Bière Forte Rousse Bière rousse de type Ale, 750 ml Code SAQ : 13504777 Code CUP : 03683080354156 ... Infos détaillées ... couleur Roux, rousse Format",
"FirstSentences": null
}