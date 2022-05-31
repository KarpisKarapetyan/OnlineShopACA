import "./adminPanel.css"
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import { mainUrl } from '../../api/api'
import PostListClothes from './clothes/PostListClothes'

function AdminPanel(){
    return (
        <section className = "adminMain" > 
                <Admin dataProvider={restProvider(`${mainUrl}/`)}>
                    <Resource name="allProducts/adminPanel" list={PostListClothes} />
                </Admin>,
        </section>
        
    )
}
export default AdminPanel