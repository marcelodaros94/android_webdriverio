describe('Smoke',()=>{
    it('should be available in the bottom bar', () => {
        const mapButton = $('~com.disney.wdpro.dlr:id/tab_icon');
        expect(mapButton).toBeVisible();
    });
})