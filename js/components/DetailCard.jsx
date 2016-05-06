import React, {PropTypes} from 'react'
import { Table } from 'react-bootstrap'

const DetailCard = ({result}) => {
    return (
        <div>
            <h4>{'名稱： '}{result.get('name')}</h4>
            <h4>{'俗名： '}{result.get('trivial')}</h4>
            <h4>{'類型： '}{result.get('category')}</h4>

            <Table>
                <tbody>
                    <tr>
                        <td>一份重(g)</td>
                        <td>{result.get('piece_weight')}</td>
                    </tr>
                    <tr>
                        <td>熱量(kcal)</td>
                        <td>{result.get('calories')}</td>
                    </tr>
                    <tr>
                        <td>水分(g)</td>
                        <td>{result.get('water')}</td>
                    </tr>
                    <tr>
                        <td>粗蛋白(g)</td>
                        <td>{result.get('protein')}</td>
                    </tr>
                    <tr>
                        <td>粗脂肪(g)</td>
                        <td>{result.get('fat')}</td>
                    </tr>
                    <tr>
                        <td>總碳水化合物(g)</td>
                        <td>{result.get('carbs')}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

DetailCard.proptypes = {
    result: PropTypes.objectOf({
        calories: PropTypes.string.isRequired,
        water: PropTypes.string.isRequired,
        protein: PropTypes.string.isRequired,
        fat: PropTypes.string.isRequired,
        carbs: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        trivial: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired
}

export default DetailCard
