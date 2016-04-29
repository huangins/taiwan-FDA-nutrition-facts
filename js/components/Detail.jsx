import React, {ProtoTypes} from 'react'
import { Table } from 'react-bootstrap'

DetailCard = ({result}) => {
    return (
        <div>
            <h3>{'名稱： '}{result.name}</h3>
            <h3>{'俗名： '}{result.trivial}</h3>
            
            <Table>
                <tbody>
                    <tr>
                        <td>熱量(kcal)</td>
                        <td>{result.calories}</td>
                    </tr>
                    <tr>
                        <td>水分(g)</td>
                        <td>{result.water}</td>
                    </tr>
                    <tr>
                        <td>粗蛋白(g)</td>
                        <td>{result.protein}</td>
                    </tr>
                    <tr>
                        <td>粗脂肪(g)</td>
                        <td>{result.fat}</td>
                    </tr>
                    <tr>
                        <td>總碳水化合物(g)</td>
                        <td>{result.carbs}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

DetailCard.prototypes = {
    result: ProtoTypes.objectOf({
        calories: ProtoTypes.string.isRequired,
        water: ProtoTypes.string.isRequired,
        protein: ProtoTypes.string.isRequired,
        fat: ProtoTypes.string.isRequired,
        carbs: ProtoTypes.string.isRequired,
        name: ProtoTypes.string.isRequired,
        trivial: ProtoTypes.string.isRequired
    }).isRequired
}
