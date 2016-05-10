import React, {PropTypes} from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import ImmutablePropTypes from 'react-immutable-proptypes'
import CardTable from './CardTable'

const DetailCard = ({result}) => {

    let re = /^unit_(.+)$/
    let unit_result = result.filter((v, k) => k.indexOf('unit') > -1)
    unit_result = unit_result.mapKeys(k => re.exec(k)[1])
    unit_result = unit_result.set('weight', result.get('piece_weight'))

    re = /^100g_(.+)$/
    let hundred_g_result = result.filter((v, k) => k.indexOf('100g') > -1)
    hundred_g_result = hundred_g_result.mapKeys(k => re.exec(k)[1])
    hundred_g_result = hundred_g_result.set('weight', '100.0')

    return (
        <div className="detail-card">
            <h4>{'名稱： '}{result.get('name')}</h4>
            <h4>{'俗名： '}{result.get('trivial')}</h4>
            <h4>{'類型： '}{result.get('category')}</h4>

            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="每份">
                    <CardTable result={unit_result} />
                </Tab>
                <Tab eventKey={2} title="每100g">
                    <CardTable result={hundred_g_result} />
                </Tab>
            </Tabs>
        </div>
    )
}

DetailCard.propTypes = {
    result: ImmutablePropTypes.mapContains({
        unit_calories: PropTypes.node.isRequired,
        unit_water: PropTypes.node.isRequired,
        unit_protein: PropTypes.node.isRequired,
        unit_fat: PropTypes.node.isRequired,
        unit_carbs: PropTypes.node.isRequired,
        '100g_calories': PropTypes.node.isRequired,
        '100g_water': PropTypes.node.isRequired,
        '100g_protein': PropTypes.node.isRequired,
        '100g_fat': PropTypes.node.isRequired,
        '100g_carbs': PropTypes.node.isRequired,
        name: PropTypes.string.isRequired,
        trivial: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired
}

export default DetailCard
