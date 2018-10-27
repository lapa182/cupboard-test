import React from 'react';
import { connect } from 'react-redux';
import CategoriesNav from 'components/molecules/CategoriesNav';

class App extends React.Component {
    render() {
        return (
            <div>
                <p>Test</p>
                {this.props.blog.loading
                    ? <div>Loading</div>
                    :
                    <main>
                        {this.props.categories.list.map(({ fields }, i) =>
                            <CategoriesNav key={i} {...fields} />
                        )};
                    </main>
                }
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(App);