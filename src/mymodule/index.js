import React, {PureComponent} from 'react';

class MyModule extends PureComponent {
    render() {
        return (
            <div>
                This is a module
            </div>
        )
    }
}

export default {
    name: 'myModule',
    buildType: 'react',
    component: MyModule,
    staticUrl: 'mymodule/'
};