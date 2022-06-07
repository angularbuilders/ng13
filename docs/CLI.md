# CLI journal

## 0. Application, module, and root component.

```bash
ng new astro-bookings --routing true --style css

npm install @picocss/pico

```

## 1. Templates

## 2. Modules

```bash
ng g m core
ng g c core/components/header --export
ng g c core/components/title
ng g c core/components/footer --export

ng g m home
ng g c home --export

ng g m shared
ng g c shared/components/reloading --export
```

## 3. Router

```bash
ng g m about -m=app --route=about
ng g c about --type=page

ng g m contact -m=app --route=contact
ng g c contact --type=page

ng g m auth/register -m=app --route=auth/register
ng g c auth/register --type=page

ng g m auth/login --route=auth/login -m=app
ng g c auth/login --type=page

ng g m agencies --route=agencies -m=app
ng g c agencies --type=page
ng g c shared/components/agencies --export --type=list

ng g m agencies/agency -m=agencies --route=agency/:id
ng g c agencies/agency --type=page


ng g m trips --route=trips -m=app
ng g c trips --type=page
ng g c shared/components/trips --export --type=list

ng g m trips/trip -m=trips --route=trip/:id
ng g c trips/trip --type=page
```

## 4. Forms

```bash
ng g c contact --type=form
ng g c auth/register --type=form

ng g c auth/login --type=form

ng g m agencies/new-agency -m=agencies --route=agency/new
ng g c agencies/new-agency --type=page
ng g c agencies/new-agency --type=form

ng g m trips/new-trip --module=trips --route=trip/new
ng g c trips/new-trip --type=page
ng g c trips/new-trip --type=form
```

## 5. Services

```bash
ng g s core/utils/form-validator
ng g s core/utils/form-messages
ng g s core/utils/transformations
ng g class core/utils/form-base

ng g i core/api/agency --type=interface
ng g i core/api/id-name --type=interface
ng g i core/api/trip --type=interface
ng g s core/api/agencies
ng g s core/api/trips
```
