import React from 'react'
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Menu',
    Board: () => <div>
        <li>Item</li>
    </div>,
    environmentProps: {
        windowBackgroundColor: '#20756d',
        canvasWidth: 261,
        canvasHeight: 250,
        windowWidth: 414,
        windowHeight: 896
    }
});
