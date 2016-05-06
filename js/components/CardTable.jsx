import React, {PropTypes} from 'react'
import { Table} from 'react-bootstrap'


const CardTable = ({result}) => (
    <Table hover striped responsive condensed>
        <tbody>
            <tr>
                <td>重量(g)</td>
                <td>{result.get('weight')}</td>
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
)

CardTable.proptypes = {
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

export default CardTable
