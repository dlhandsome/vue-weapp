/**
 * Created by sail on 2017/4/27.
 */
import { destoryVm, testComponent } from '../helper'
import Components from '../../../packages/view'

describe('view.vue', () => {
  let vm

  afterEach(() => {
    destoryVm(vm)
  })

  it('create', () => {
    vm = testComponent(Components.view)

    expect(vm.$el.classList.contains('weapp-view')).to.true
  })
})
