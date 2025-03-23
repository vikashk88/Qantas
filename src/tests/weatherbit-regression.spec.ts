import { test, expect, request } from '@playwright/test';
import { locations } from '../utils/testData';
import { API } from '../utils/api';
import { API_CONFIG } from '../utils/config';

test.describe('Weatherbit API Regression Suite', () => {
    let apiContext;

    test.beforeEach(async ({ request }) => {

        apiContext = new API(request);
    });

    test('AC1: Weather by Lat/Lon', { tag: ["@api"] }, async () => {
        for (const loc of locations.byLatLon) {

            const path: string = API_CONFIG.baseUrl + "/current?lat=" + loc.lat + "&lon=" + loc.lon + "&key=" + API_CONFIG.apiKey;

            const response = await apiContext.get(path);
            expect(response.status()).toBe(200);

            const body = await response.json();
            expect(body.data?.length).toBeGreaterThan(0);
            expect(body.data[0]).toHaveProperty('temp');
        }
    });

    test('AC2: Weather by Postal Code', { tag: ["@api", "@postalCode"] }, async () => {
        for (const loc of locations.byPostCode) {
            const path: string = API_CONFIG.baseUrl + "/current?postal_code=" + loc.postal_code + "&country=" + loc.country + "&key=" + API_CONFIG.apiKey;
            const response = await apiContext.get(path);
            expect(response.status()).toBe(200);
            const body = await response.json();
            expect(body.data?.length).toBeGreaterThan(0);
            expect(body.data[0]).toHaveProperty('weather');
        }
    });
});
