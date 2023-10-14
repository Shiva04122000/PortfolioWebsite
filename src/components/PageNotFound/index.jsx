import React from 'react'
import styles from './PageNotFound.module.scss'
import { Link, useLocation } from 'react-router-dom'

const PageNotFound = () => {
    const location = useLocation()

    return (
        <div className={styles.mainDiv}>
            <div className={styles.errorPage}>
                    <h2 className={styles.header}>
                        404
                    </h2>
                    <h4>
                        Opps! Page not found
                    </h4>
                    <p>
                        Sorry, the page you're looking for doesn't exist.
                    </p>
                    <div className={styles.btns}>
                        <Link 
                            to={location?.state?.previousPath} 
                            state={{previousPath: location.pathname}}
                        >
                            <button 
                                className={styles.returnBtn}
                            >
                                Back to previous page
                            </button>
                        </Link>
                    </div>
            </div>
        </div>
    )
}

export default PageNotFound