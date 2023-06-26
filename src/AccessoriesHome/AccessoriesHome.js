import { Fragment } from 'react';
import './AccessoriesHome.css';
import { accessoriesData } from './AccessoriesDataHome';
export function AccessoriesHome() {

    return (
        <Fragment>
            <h1 className='head1'>Accessories </h1>
            <div className='main_accessories_content'>
                {
                    accessoriesData.map(items => (
                        <div key={items.id} className='sub_access_items'>
                            <img src={items.images} alt="error page" />

                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}