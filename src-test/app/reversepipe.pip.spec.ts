import { ReversePipe } from "./reverse.pipe"



describe('testing pipe',()=>{
    it('test the reverse value',()=>{
        let reverse= new ReversePipe()

        expect(reverse.transform('hello')).toEqual('olleh')
    })
})