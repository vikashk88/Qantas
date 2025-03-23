import { Page } from '@playwright/test';

export function getRandomIndexes(length: number, count: number): number[] {
    const set = new Set<number>();
    while (set.size < Math.min(length, count)) {
        set.add(Math.floor(Math.random() * length));
    }
    return Array.from(set);
}

export async function addRandomProducts(page: Page, count: number): Promise<{ names: string[]; total: number }> {
    const buttons = await page.$$('.btn_inventory');
    const indexes = getRandomIndexes(buttons.length, count);

    const names: string[] = [];
    let total = 0;

    for (const i of indexes) {
        const button = buttons[i];
        const container = await button.evaluateHandle(el => el.closest('.inventory_item'));

        const name = await container.evaluate(el =>
            el.querySelector('.inventory_item_name')?.textContent?.trim()
        );

        const priceText = await container.evaluate(el =>
            el.querySelector('.inventory_item_price')?.textContent?.replace('$', '')
        );

        const price = parseFloat(priceText || '0');
        total += price;
        names.push(name || '');

        await button.click();
    }

    return { names, total };
}