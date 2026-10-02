**IV034**

*Hoe moet XsdVersie gevuld worden?*

De waarde voor de elementen BasisschemaXsdVersie en BerichtXsdVersie in het datatype CDT_XsdVersie moeten overgenomen worden uit de schemadefinitie (XSD) waarop het bericht gecreëerd/gebaseerd is. 
Deze waarden staan in de schemadefinitie respectievelijk in /xs:schema/xs:annotation/xs:appinfo/<namespace>:BasisschemaXsdVersie en /xs:schema/xs:annotation/xs:appinfo/<namespace>:BerichtXsdVersie.
Voor <namespace> wordt de namespace van de desbetreffende iStandaard ingevuld, bijv. ‘iJw’, ‘iWmo’, enz.
