import { getOrderedRoutes, getRoutes, validateRoute } from '../src/lib/routes'
import { TaxFormUserInput } from '../src/types/TaxFormUserInput'
import { TaxForm } from '../src/types/TaxForm'

describe('routes', () => {
  describe('#getOrderedRoutes', () => {
    it('shoudl return routes without children and without iban', () => {
      expect(getOrderedRoutes({} as TaxForm)).toStrictEqual([
        '/',
        '/prijmy-a-vydavky',
        '/zamestnanie',
        '/partner',
        '/dochodok',
        '/kupele',
        '/dve-percenta',
        '/osobne-udaje',
        '/suhrn',
        '/vysledky',
        '/stiahnut',
      ])
    })

    it('shoudl return routes with children and without iban', () => {
      expect(
        getOrderedRoutes({ eligibleForChildrenBonus: true } as TaxForm),
      ).toStrictEqual([
        '/',
        '/prijmy-a-vydavky',
        '/zamestnanie',
        '/partner',
        '/deti',
        '/dochodok',
        '/kupele',
        '/dve-percenta',
        '/osobne-udaje',
        '/suhrn',
        '/vysledky',
        '/stiahnut',
      ])
    })

    it('shoudl return routes with children and with iban', () => {
      expect(
        getOrderedRoutes({
          eligibleForChildrenBonus: true,
          mozeZiadatVratitDanovyBonusAleboPreplatok: true,
        } as TaxForm),
      ).toStrictEqual([
        '/',
        '/prijmy-a-vydavky',
        '/zamestnanie',
        '/partner',
        '/deti',
        '/dochodok',
        '/kupele',
        '/dve-percenta',
        '/osobne-udaje',
        '/suhrn',
        '/vysledky',
        '/iban',
        '/stiahnut',
      ])
    })

    it('shoudl return routes without children and with iban', () => {
      expect(
        getOrderedRoutes({
          mozeZiadatVratitDanovyBonusAleboPreplatok: true,
        } as TaxForm),
      ).toStrictEqual([
        '/',
        '/prijmy-a-vydavky',
        '/zamestnanie',
        '/partner',
        '/dochodok',
        '/kupele',
        '/dve-percenta',
        '/osobne-udaje',
        '/suhrn',
        '/vysledky',
        '/iban',
        '/stiahnut',
      ])
    })
  })

  describe('#getRoutes', () => {
    describe('nextRoute', () => {
      describe('for route /partner', () => {
        it('should be correct when not eligible for children bonus', () => {
          const { nextRoute } = getRoutes('/partner', {} as TaxForm)
          expect(nextRoute()).toBe('/dochodok')
        })

        it('should be correct when eligible for children bonus', () => {
          const { nextRoute } = getRoutes('/partner', {
            eligibleForChildrenBonus: true,
          } as TaxForm)
          expect(nextRoute()).toBe('/deti')
        })
      })

      describe('for route /vysledky', () => {
        it('should be correct when not eligible for refund', () => {
          const { nextRoute } = getRoutes('/vysledky', {} as TaxForm)
          expect(nextRoute()).toBe('/stiahnut')
        })

        it('should be correct when eligible for refund', () => {
          const { nextRoute } = getRoutes('/vysledky', {
            mozeZiadatVratitDanovyBonusAleboPreplatok: true,
          } as TaxForm)
          expect(nextRoute()).toBe('/iban')
        })
      })
    })

    describe('previousRoute', () => {
      describe('for route /dochodok', () => {
        it('should be correct when not eligible for children bonus', () => {
          const { previousRoute } = getRoutes('/dochodok', {} as TaxForm)
          expect(previousRoute()).toBe('/partner')
        })

        it('should be correct when eligible for children bonus', () => {
          const { previousRoute } = getRoutes('/dochodok', {
            eligibleForChildrenBonus: true,
          } as TaxForm)
          expect(previousRoute()).toBe('/deti')
        })
      })

      describe('for route /stiahnut', () => {
        it('should be correct when not eligible for refund', () => {
          const { previousRoute } = getRoutes('/stiahnut', {} as TaxForm)
          expect(previousRoute()).toBe('/vysledky')
        })

        it('should be correct when eligible for refund', () => {
          const { previousRoute } = getRoutes('/stiahnut', {
            mozeZiadatVratitDanovyBonusAleboPreplatok: true,
          } as TaxForm)
          expect(previousRoute()).toBe('/iban')
        })
      })
    })
  })

  describe('#validateRoute', () => {
    const replace = jest.fn()

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should redirect from route when form is not filled out', () => {
      validateRoute(
        { route: '/partner', replace } as any,
        {} as TaxForm,
        {} as TaxFormUserInput,
      )
      expect(replace).toHaveBeenCalledWith('/')
    })

    it('should not redirect from route when form is filled out', () => {
      validateRoute(
        { route: '/partner', replace } as any,
        {} as TaxForm,
        { employed: false } as TaxFormUserInput,
      )
      expect(replace).toHaveBeenCalledTimes(0)
    })
  })
})
