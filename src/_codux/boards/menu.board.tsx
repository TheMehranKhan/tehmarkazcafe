import React from 'react'
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Menu',
    Board: () => <div>
        <h1>Tehran Markaz Cafe Menu</h1>
        <h2>Heading 2</h2>
    </div>,
    environmentProps: {
        windowBackgroundColor: '#20756d'
    }
});
