describe('Map',()=>{
    it('should be available in the bottom bar', () => {
        const mapButton = $('~com.disney.wdpro.dlr:id/tab_icon');
        expect(mapButton).toBeVisible();
    });
    
    it('should open the map when tapped', () => {
        const mapButton = $('~com.disney.wdpro.dlr:id/tab_icon');
        mapButton.click();
        const map = $('~com.disney.wdpro.dlr:id/map_view_fragment');
        expect(map).toBeVisible();
    });
})

describe('Category List', () => {
    it('should be available when tapping the Map Button', () => {
        const mapButton = $('~com.disney.wdpro.dlr:id/tab_icon');
        mapButton.click();
        const categoryList = $('~com.disney.wdpro.dlr:id/categoryTitleLayout');
        expect(categoryList).toBeVisible();
    });

    it('should list other categories to be selected', () => {
        const categoryList = $('~com.disney.wdpro.dlr:id/categoryTitleLayout');
        categoryList.click();
        const categoryItem = $('android.widget.LinearLayout[text="Characters"]');
        expect(categoryItem).toBeVisible();
    });

    it('should have "Hotels" option available in the list', () => {
        const categoryList = $('~com.disney.wdpro.dlr:id/categoryTitleLayout');
        categoryList.click();
        const categoryItem = $('android.widget.LinearLayout[text="Hotels"]');
        expect(categoryItem).toBeVisible();
    });
});
