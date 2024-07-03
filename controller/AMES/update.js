const { ObjectId } = require('mongodb')
const initDatabase = require('../../database');

async function update(data, child){
    const db = await initDatabase();
    try {

        let idP = data.split("!!!")

        let newArrayData = []
        let Arraydata = idP[0].split("1_2_3")
        idP = idP[1]

        // console.log(idP)


        let children = child.split('1_2_3')
        let arrrayChild = []
        let dictChild = {}
        let tempstring = ""

        let numero = ""
        let restOfString = ""
        let tempDict = {}
        children.forEach(elt => {
            numero = elt[0]
            restOfString = elt.substring(1)
            // console.log(numero)
            // console.log(restOfString)
            tempstring = restOfString.split('___')
            dictChild = {}
            dictChild['Name'] = tempstring[0]
            dictChild['Ressources'] = tempstring[1]
            dictChild['Début'] = tempstring[2]
            dictChild['Fin'] = tempstring[3]
            dictChild['Réal'] = tempstring[4]

            arrrayChild.push(dictChild)
            if(tempDict[numero]){
                tempDict[numero].push(arrrayChild[0])
            } else {
                tempDict[numero] = arrrayChild    
            }
            arrrayChild = []
        });
        // console.log(tempDict)
        // console.log(tempDict['0'])
        // console.log(tempDict['1'])

        let Dict = {}
        // console.log(Arraydata)
        Arraydata.forEach((element, ind) => {
            let tempdata = element.split('___')
            // console.log(tempdata)

            Dict = {}
            Dict['Name'] = tempdata[0]
            Dict['Ressources'] = tempdata[1]
            Dict['Début'] = tempdata[2]
            Dict['Fin'] = tempdata[3]
            Dict['Réal'] = tempdata[4]

            // console.log(tempDict)
            if(tempDict[ind]){
                Dict['children'] = tempDict[ind]
                console.log("oui")
                console.log(Dict)
            } else {
                Dict['children'] = []    
                console.log("non")
            }

            newArrayData.push(Dict)
        });

        // console.log(Arraydata)
        console.log(newArrayData)

        // return "test"
        const filter = {_id: new ObjectId(idP)}
        const update = {task: newArrayData}        
        const result = await db.collection('AMES').updateOne(
            filter, 
            {$set: update}
        )

        console.log("update finish")

        return result
    } catch (error) {
        console.error({ error });
    }
}

module.exports = {update}