{/* <div id="root">
    <h1>Hello From React</h1>
</div> */}

// const heading = React.createElement('h1',{},'Hello From React');
// const root = ReactDOM.createRoot(document.querySelector('#root'));

// root.render(heading);


// -------------------------------2-----------------------------
{/* <div id='root'>
    <div>
        <h2>Hello Again</h2>
    </div>
</div> */}

// const heading = React.createElement('div', {},
//         React.createElement('h2', {}, 'Hello Again')
//     );
// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(heading);



// ------------------------------3-------------------------------------
{/* <div id='root'>
    <div>
        <h2>Hello Again</h2>
        <p>lorem23</p>
    </div>
</div> */}

// const div=React.createElement('div',{id:"main"},
//     [React.createElement('h2',{},'Hello again'),
//         React.createElement('p',{},'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aliquid ab similique fuga facilis laborum aperiam, mollitia numquam nemo distinctio, optio, sit eligendi.')
//     ]
// );
// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(div);


// -----------------------------------4--------------------------------------
{/* <div id='root'> {root div is in html document}
    <div>
        <h2>Hello Again</h2>
        <p>lorem23</p>
    </div>
    <div>
        <h2>Hello Again</h2>
        <p>lorem23</p>
    </div>
</div> */}

const  main = [React.createElement('h1',{id:'boss'},'Boss is Here'),
    React.createElement('div',{id:"main"},
        [React.createElement('h2',{},'Hello again'),
            React.createElement('p',{},'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aliquid ab similique fuga facilis laborum aperiam, mollitia numquam nemo distinctio, optio, sit eligendi.')
        ]
    ),
    React.createElement('div',{id:"mains"},
            [React.createElement('h2',{},'Hello again'),
                React.createElement('p',{},'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aliquid ab similique fuga facilis laborum aperiam, mollitia numquam nemo distinctio, optio, sit eligendi.')
            ]
        )];

        const root = ReactDOM.createRoot(document.querySelector('#root'));
        root.render(main);
